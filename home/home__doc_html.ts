import { sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { site__home__post_count_ } from '@rappstack/domain--server--blog/site'
import {
	jsonld_id_ref__new,
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { site__social_a1_, site__title_ } from '@rappstack/domain--server/site'
import { iconify_rss_ } from '@rappstack/ui--any--blog/icon'
import { button__a_ } from '@rappstack/ui--any/anchor'
import { server_blog_card__li_ } from '@rappstack/ui--server--blog/card'
import { hr_div_ } from '@rappstack/ui--server--blog/hr'
import { right_arrow_ } from '@rappstack/ui--server--blog/icon'
import { blog__main_fragment_ } from '@rappstack/ui--server--blog/main'
import { socials__div_ } from '@rappstack/ui--server--blog/social'
import { schema_org_rdfa__meta_ } from '@rappstack/ui--server/rdfa'
import { class_ } from 'ctx-core/html'
import { a_, article_, div_, h1_, h2_, img_, p_, section_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { svgrepo_waving_hand_ } from '../icon/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import briantakita_profile_photo_webp from '../public/assets/images/briantakita-profile-photo.webp'
import { social_link_button_svg_class } from '../social/index.js'
export function home__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	const description = 'Hi! I build efficient apps & libraries using the web platform. With powerful libraries, I deliver results with simpler systems. Systems that emphasize powerful primitives, bottom-up development, & domain ontology. Unlocking the vanilla web platform to deliver productivity without framework bloat. The result is fast web sites/apps & systems that expand to handle more with less.'
	const unfeatured__dehydrated_post_meta_a =
		sorted_dehydrated_post_meta_a1_(ctx)
			.filter(({ featured })=>!featured)
	const featured__dehydrated_post_meta_a =
		sorted_dehydrated_post_meta_a1_(ctx)
			.filter(({ featured })=>featured)
	const title = 'Home | ' + site__title_(ctx)
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'ProfilePage')
	const Article_id_ref = jsonld_id_ref__new(ctx, 'Article')
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({ ctx }),
			blog__main_fragment_({
				ctx
			}, [
				article_({
					...schema_org_rdfa_<Article>('Article', Article_id_ref),
				}, [
					div_({
						...schema_org_rdfa_property_<Article>('articleBody'),
					}, [
						section_({
							id: 'hero',
							class: class_(
								'pt-8',
								'pb-6')
						}, [
							schema_org_rdfa__meta_<Article>({ property: 'headline', content: site__title_(ctx)! }),
							div_({
								class: class_(
									'flex',
									'items-center'
								)
							}, [
								h1_({
									class: class_(
										'my-4',
										'sm:my-8',
										'mr-2',
										'inline-block',
										'text-3xl',
										'sm:text-5xl',
										'font-bold'),
									...schema_org_rdfa_property_<Article>('author'),
								}, `Brian Takita`),
								a_({
									target: '_blank',
									href: '/rss',
									class: class_(
										'rss-link',
										'mb-3'),
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
							]),
							img_({
								src: briantakita_profile_photo_webp,
								title: 'Brian Takita',
								class: class_(
									'inline-block',
									'sm:float-right',
									'rounded-full',
									'h-32',
									'w-32',
									'-mt-20',
									'translate-x-4'),
								...schema_org_rdfa_property_<Article>('image'),
							}),
							// @formatter:off
							p_({ id: 'about', class: 'my-2' }, [
								'Hi ', svgrepo_waving_hand_({ class: class_('inline-block', 'h-4', 'w-4', 'mb-1' ) }),
								description.slice('Hi!'.length)
							]),
							// @formatter:on
							site__social_a1_(ctx)?.length
								? [
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
								] : undefined,
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
										server_blog_card__li_({
											ctx,
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
									server_blog_card__li_({
										ctx,
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
				])
			]),
			briantakita__footer_({ ctx })
		])
	)
}
