import {
	schema_org_props_rdfa_T,
	schema_org_rdfa_vocab,
	type schema_org_thing_rdfa_T
} from '@rappstack/domain--server/rdfa'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { type tag_dom_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
import { article_, link_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_, type briantakita_header__link_T } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import { prose_class } from '../prose/index.js'
export function md_layout__doc_html_({
	ctx,
	title,
	h1_text,
	description,
	active_link,
	article_class,
	article_props,
}:{
	ctx:request_ctx_T
	title:string
	h1_text:string
	description?:string
	active_link?:briantakita_header__link_T
	article_class?:string
	article_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
}, ...children:tag_dom_T[]) {
	return (
		layout__doc_html_({
			ctx,
			title
		}, [
			briantakita__header_({
				ctx,
				active_link,
			}),
			blog__main_fragment_({
				ctx,
				class: class_(
					'prose',
					prose_class),
				h1_text,
				description,
			}, [
				article_({
					id: active_link,
					class: class_(
						'mb-8',
						'max-w-3xl',
						'prose-img:border-0',
						article_class),
					...<schema_org_thing_rdfa_T>{
						vocab: schema_org_rdfa_vocab,
						typeof: 'Article',
					},
					...article_props,
				}, [
					link_(<schema_org_props_rdfa_T<any>>{
						property: '@id',
						href: url__join(site__website_(ctx)!, request_url__pathname_(ctx), '#Article')
					}),
					...children,
					footnote_list__div_({ ctx })
				])
			]),
			briantakita__footer_({ ctx })
		])
	)
}
