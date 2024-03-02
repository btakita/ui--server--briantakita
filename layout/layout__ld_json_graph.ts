import { response__drain } from '@rappstack/domain--server/response'
import { site__author_ } from '@rappstack/domain--server/site'
import { social_a1_ } from '@rappstack/domain--server/social'
import { MarkedPlaintextRenderer } from '@rappstack/ui--any/md'
import { request_url__origin_ } from '@rappstack/ui--server/request'
import { I } from 'ctx-core/combinators'
import { id_be_memo_pair_, rmemo__wait } from 'ctx-core/rmemo'
import { url__join } from 'ctx-core/uri'
import { marked } from 'marked'
import { type request_ctx_T } from 'relysjs/server'
import type { Graph, Product } from 'schema-dts'
import * as open_source_md_o from '../open_source/config.js'
export const [
	,
	layout__ld_json_graph_
] = id_be_memo_pair_<Graph|undefined, unknown, request_ctx_T>(
	'layout__ld_json_graph',
	(ctx, $)=>{
		const root_Person_id = request_url__origin_(ctx)
		const root_AboutPage_id = url__join(root_Person_id, '#about')
		const root_ContactPage_id = url__join(root_Person_id, '#contact')
		const about_WebPage_id = url__join(request_url__origin_(ctx), 'about')
		const open_source_Webpage_id = url__join(request_url__origin_(ctx), 'open-source')
		Promise.all(Object.values(open_source_md_o).map(async open_source_md=>{
			let id = ''
			let href = ''
			let title = ''
			const renderer = new MarkedPlaintextRenderer
			let h2__transform__promise:Promise<void>|undefined = undefined
			renderer.heading = (text, level, raw)=>{
				if (level === 2) {
					const h2_rw = new HTMLRewriter()
						.on('a', {
							element(ele){
								for (const [k, v] of ele.attributes) {
									if (k === 'id') id = v
									if (k === 'href') href = v
								}
							},
							text(text) {
								title += text.text
							}
						})
					h2__transform__promise = response__drain(
						h2_rw.transform(new Response(raw)))
				}
				return ''
			}
			const description = await marked(open_source_md(), { renderer })
			await h2__transform__promise
			const product_id = url__join(open_source_Webpage_id, '#' + id)
			return <Product>{
				'@type': 'Product',
				'@id': product_id,
				name: title + ' | ' + site__author_(ctx),
				url: product_id,
				description,
				sameAs: [href]
			}
		})).then(product_a1=>{
			$._ = graph__new(ctx, product_a1)
		}).catch(err=>{
			console.error(err)
			$._ = graph__new(ctx)
		})
		return $.val
		function graph__new(ctx:request_ctx_T, product_a1?:Product[]):Graph {
			return {
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'Person',
						'@id': root_Person_id,
						url: root_Person_id,
						name: site__author_(ctx),
						hasOccupation: {
							'@type': 'Occupation',
							name: 'Full Stack Developer',
							qualifications: 'Develops many interoperable apps + open source libraries that are simple & small in size. Creates flat architectures that scale large & small. These libraries & apps build on each other. Reactive programming with general purpose contexts. Precise & scalable domain ontology. These techniques remove incidental complexity & bloat that come with other programming paradigms.',
						},
						mainEntityOfPage: [
							about_WebPage_id,
							root_ContactPage_id,
						],
						subjectOf: { '@id': about_WebPage_id },
						sameAs: social_a1_(ctx).filter(social=>social.active).map(social=>social.href),
					},
					{
						'@type': 'AboutPage',
						'@id': root_AboutPage_id,
						name: site__author_(ctx) + ' Summary',
						inLanguage: 'en-us',
						isPartOf: root_Person_id
					},
					{
						'@type': 'WebPage',
						'@id': about_WebPage_id,
						url: about_WebPage_id,
						name: 'About | ' + site__author_(ctx),
						inLanguage: 'en-us',
						isPartOf: [
							root_Person_id,
							root_AboutPage_id,
						],
						about: root_Person_id,
						mainEntity: root_Person_id
					},
					{
						'@type': 'ContactPage',
						'@id': root_ContactPage_id,
						url: root_ContactPage_id,
						name: 'Contact ' + site__author_(ctx),
						inLanguage: 'en-us',
						isPartOf: root_Person_id,
						about: root_Person_id,
						mainEntity: root_Person_id
					},
					...product_a1 ?? [],
				]
			}
		}
	})
export function layout__ld_json_graph__wait(ctx:request_ctx_T) {
  return rmemo__wait(()=>layout__ld_json_graph_(ctx), I, 5_000)
}
