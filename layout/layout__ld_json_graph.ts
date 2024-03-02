import { site__author_ } from '@rappstack/domain--server/site'
import { request_url__origin_ } from '@rappstack/ui--server/request'
import { id_be_memo_pair_ } from 'ctx-core/all'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'relysjs/server'
import type { Graph } from 'schema-dts'
export const [
	,
	layout__ld_json_graph_
] = id_be_memo_pair_(
	'layout__ld_json_graph',
	(ctx:request_ctx_T)=>{
		const root_id = request_url__origin_(ctx)
		const root_summary_id = url__join(root_id, '#summary')
		const about_id = url__join(request_url__origin_(ctx), 'about')
		return <Graph>{
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'Person',
					'@id': root_id,
					name: site__author_(ctx),
					hasOccupation: {
						'@type': 'Occupation',
						name: 'Full Stack Developer',
						qualifications: 'Develops many interoperable apps + open source libraries that are simple & small in size. Creates flat architectures that scale large & small. These libraries & apps build on each other. Reactive programming with general purpose contexts. Precise & scalable domain ontology. These techniques remove incidental complexity & bloat that come with other programming paradigms.',
					},
					mainEntityOfPage: about_id,
					subjectOf: about_id,
				},
				{
					'@type': 'AboutPage',
					'@id': root_summary_id,
					name: site__author_(ctx) + ' Summary',
					inLanguage: 'en-us',
					isPartOf: { '@id': root_id }
				},
				{
					'@type': 'WebPage',
					'@id': about_id,
					url: about_id,
					name: 'About | ' + site__author_(ctx),
					inLanguage: 'en-us',
					isPartOf: { '@id': root_summary_id },
					about: { '@id': root_id },
					mainEntity: { '@id': root_id }
				}
			]
		}
	})
