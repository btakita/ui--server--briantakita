import { Person_id_ref_, Person_image } from '@btakita/domain--server--briantakita/jsonld'
import { tag_ } from '@rappstack/domain--server--blog/tag'
import { blog_tag__main_fragment_ } from '@rappstack/ui--server--blog/tag'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
type tag__doc_html_props_T = {
	ctx:request_ctx_T
	h1_class?:string
}
export function tag__doc_html_($p:tag__doc_html_props_T) {
	const {
		ctx,
		h1_class,
	} = $p
	const title = 'Tag:' + tag_(ctx)
	const description = 'Blog posts & articles that have the tag "' + tag_(ctx) + '".'
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link: 'tags',
			}),
			blog_tag__main_fragment_({
				ctx,
				class: 'nofouc',
				h1_class: class_(
					'mb-0',
					h1_class),
				author_id_ref: Person_id_ref_(ctx),
				image: Person_image,
			}),
			briantakita__footer_({ ctx }),
		])
	)
}
