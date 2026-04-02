import { Person_image } from '@btakita/domain--server--briantakita/jsonld'
import {
	blog_post__canonical_url_,
	blog_post__description_,
	blog_post__pub_date_,
	blog_post__tags_,
	blog_post__title_,
	blog_post__video_url_,
} from '@rappstack/domain--server--blog/post'
import {
	jsonld__add,
	WebPage__author_,
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__mainEntity__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { blog_post__main_fragment_ } from '@rappstack/ui--server--blog/post'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'rhonojs/server'
import type { BlogPosting, VideoObject } from 'schema-dts'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import { sticky__h1_, sticky_header_class } from '../sticky/index.js'
type post__doc_html_props_T = {
	ctx:request_ctx_T
}
export function post__doc_html_($p:post__doc_html_props_T) {
	const { ctx } = $p
	const title = blog_post__title_(ctx)!
	const canonical_url = blog_post__canonical_url_(ctx)
	const description = blog_post__description_(ctx)
	const video_url = blog_post__video_url_(ctx)
	const pub_date = blog_post__pub_date_(ctx)
	const tags = blog_post__tags_(ctx)
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'ItemPage')
	let video:VideoObject|undefined
	if (video_url) {
		const video_id = video_url.split('v=')[1]?.split('&')[0]
		video = <VideoObject>{
			'@type': 'VideoObject',
			name: title,
			description: description,
			thumbnailUrl: video_id
				? `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`
				: undefined,
			uploadDate: pub_date
				? new Date(pub_date).toISOString().split('T')[0]
				: undefined,
			contentUrl: video_url,
			embedUrl: video_id
				? `https://www.youtube.com/embed/${video_id}`
				: undefined,
		}
	}
	const blog_posting_id_ref = jsonld__add(ctx, ()=><BlogPosting>{
		'@type': 'BlogPosting',
		headline: title,
		url: canonical_url,
		description: description,
		datePublished: pub_date
			? new Date(pub_date).toISOString().split('T')[0]
			: undefined,
		author: WebPage__author_(ctx),
		keywords: tags?.join(', ') || undefined,
		...(video ? { video } : {}),
	})
	WebPage__mainEntity__set(ctx, blog_posting_id_ref)
  return (
		layout__doc_html_({
			ctx,
			title,
			canonical_url,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link: 'posts'
			}),
			blog_post__main_fragment_({
				ctx,
				class: class_(
					'nofouc',
					'relative',
					'prose'),
				header_class: 'contents',
				h1_dom: sticky__h1_({ title, }),
				article_class: '',
				progress_container_class: 'bg-skin-fill',
				progress_class: 'bg-skin-accent',
				image: Person_image,
				description_class: 'text-2xl',
			}),
			briantakita__footer_({ ctx }),
		])
	)
}
