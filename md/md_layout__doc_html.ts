import { jsonld_id_ref__new } from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_, } from '@rappstack/domain--server/rdfa'
import { footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
import { article_, div_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_, type briantakita_header__link_T } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
type md_layout__doc_html_props_T = {
	ctx:request_ctx_T
	title:string
	hero_class?:string
	h1_dom?:tag_dom_T
	h1_text?:string
	h1_class?:string
	description?:string
	hero_p_class?:string
	hero_p_text?:string
	active_link?:briantakita_header__link_T
	article_class?:string
	article_props?:Exclude<tag_props_T<HTMLElement>, 'class'>
}
export function md_layout__doc_html_($p:md_layout__doc_html_props_T, ...children:tag_dom_T[]) {
	const {
		ctx,
		title,
		hero_class,
		h1_dom,
		h1_text,
		h1_class,
		description,
		hero_p_class,
		hero_p_text,
		active_link,
		article_class,
		article_props,
	} = $p
	const Article_id_ref = jsonld_id_ref__new(ctx, 'Article')
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link,
			}),
			blog__main_fragment_({
				ctx,
				class: class_(
					'nofouc',
					'prose'),
				hero_class,
				h1_dom,
				h1_text,
				h1_class,
				hero_p_class,
				hero_p_text: hero_p_text ?? description,
			}, [
				article_({
					id: active_link,
					class: class_(
						'mb-8',
						'max-w-3xl',
						'prose-img:border-0',
						article_class),
					...schema_org_rdfa_<Article>('Article', Article_id_ref),
					...article_props,
				}, [
					div_({
						...schema_org_rdfa_property_<Article>('articleBody'),
						class: class_('prose')
					}, ...children),
					footnote_list__div_({ ctx })
				])
			]),
			briantakita__footer_({ ctx })
		])
	)
}
