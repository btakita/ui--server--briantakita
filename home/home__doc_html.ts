import { sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { site__home__post_count_ } from '@rappstack/domain--server--blog/site'
import { social_a1_ } from '@rappstack/domain--server/social'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { iconify_rss_ } from '@rappstack/ui--any--blog/icon'
import { button__a_ } from '@rappstack/ui--any/anchor'
import { hr_div_ } from '@rappstack/ui--server--blog/hr'
import { right_arrow_ } from '@rappstack/ui--server--blog/icon'
import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
import { socials__div_ } from '@rappstack/ui--server--blog/social'
import { class_ } from 'ctx-core/html'
import { a_, div_, h1_, h2_, p_, section_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import { social_link_button_svg_class } from '../social/index.js'
export function home__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	const unfeatured__dehydrated_post_meta_a =
		sorted_dehydrated_post_meta_a1_(ctx)
			.filter(({ featured })=>!featured)
	const featured__dehydrated_post_meta_a =
		sorted_dehydrated_post_meta_a1_(ctx)
			.filter(({ featured })=>featured)
	return (
		layout__doc_html_({
			ctx
		}, [
			briantakita__header_({ ctx }),
			blog__main_fragment_({
				ctx
			}, [
				section_({
					id: 'hero',
					class: class_(
						'pt-8',
						'pb-6')
				}, [
					h1_({
						class: class_(
							'my-4',
							'sm:my-8',
							'mr-2',
							'inline-block',
							'text-3xl',
							'sm:text-5xl',
							'font-bold')
					}, `Brian Takita`),
					a_({
						target: '_blank',
						href: '/rss',
						class: class_(
							'rss-link',
							'mb-6'),
						'aria-label': 'rss feed',
						title: 'RSS Feed',
					}, [
						iconify_rss_({
							class: class_(
								'rss-icon',
								'inline-block',
								'mb-2',
								'sm:mb-3',
								'h-6',
								'w-6',
								'scale-110',
								'sm:scale-125',
								'fill-skin-accent')
						})
					]),
					// @formatter:off
					p_({ id: 'about', class: 'my-2' }, [
						'I build efficient apps & libraries using the web platform. With powerful libraries, I deliver results with simpler systems. Systems that emphasize powerful primitives, bottom-up development, & domain ontology. Unlocking the vanilla web platform to deliver productivity without framework bloat. The result is fast web sites/apps & systems that expand to handle more with less. Now & into the future.'
					]),
					// @formatter:on
					social_a1_(ctx).length > 0 ?
						div_({
							class: class_(
								'social-wrapper',
								'mt-4',
								'flex',
								'flex-col',
								'sm:flex-row',
								'sm:items-center')
						}, [
							div_({
								class: class_(
									'social-links',
									'mb-1',
									'sm:mb-0',
									'mr-2',
									'whitespace-nowrap')
							}),
							socials__div_({
								ctx,
								link_button_svg_class: social_link_button_svg_class,
							})
						])
						: undefined,
				]),
				hr_div_(),
				featured__dehydrated_post_meta_a.length > 0
					? [
						section_({
							id: 'featured',
							class: class_(
								'pt-12',
								'pb-6')
						}, [
							h2_({
								class: class_(
									'text-2xl',
									'font-semibold',
									'tracking-wide')
							}, `Featured`),
							ul_(featured__dehydrated_post_meta_a.map(dehydrated_post_meta=>
								blog_card__li_({
									href: `/posts/${post_slug__new(dehydrated_post_meta)}`,
									dehydrated_post_meta,
									show_heading: false
								})
							))
						])
					] : null,
				hr_div_(),
				section_({
					id: 'recent-posts',
					class: class_(
						'pt-12')
				}, [
					h2_({
						class: class_(
							'text-2xl',
							'font-semibold',
							'tracking-wide')
					}, 'Recent Posts'),
					ul_(unfeatured__dehydrated_post_meta_a
						.slice(0, site__home__post_count_(ctx))
						.map(post=>
							blog_card__li_({
								href: `/posts/${post_slug__new(post)}`,
								dehydrated_post_meta: post,
								show_heading: false
							}))),
				]),
				div_({
					class: class_(
						'all-posts-btn-wrapper',
						'my-8',
						'text-center',
						'group')
				}, [
					button__a_({ href: '/posts' }, [
						`All Posts`,
						right_arrow_({
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'scale-125',
								'fill-skin-base',
								'group-hover:fill-skin-accent')
						})
					])
				])
			]),
			briantakita__footer_({ ctx })
		])
	)
}
