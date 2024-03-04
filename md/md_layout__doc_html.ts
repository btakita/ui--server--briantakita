import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { article_ } from 'relementjs/html'
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
}:{
	ctx:request_ctx_T
	title:string
	h1_text:string
	description?:string
	active_link?:briantakita_header__link_T
	article_class?:string
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
						article_class)
				}, ...children)
			]),
			briantakita__footer_({ ctx })
		])
	)
}
