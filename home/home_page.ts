import { type dehydrated_post_meta_T, post__slug__new } from '@btakita/domain--any--blog'
import { site__home__page__post_count_, social_a1_ } from '@btakita/domain--server--blog'
import { blog_card__li_ } from '@btakita/ui--any--blog/card'
import { link_button_a_ } from '@btakita/ui--server--blog/anchor'
import { hr_div_ } from '@btakita/ui--server--blog/hr'
import { blog__main_fragment_ } from '@btakita/ui--server--blog/main'
import { socials_div_ } from '@btakita/ui--server--blog/social'
import { class_ } from 'ctx-core/html'
import { type fragment_T, type relement_env_T } from 'relementjs'
import { a_, div_, h1_, h2_, p_, section_, ul_ } from 'relementjs/html'
import { circle_, path_, svg_ } from 'relementjs/svg'
import { type request_ctx_T } from 'relysjs/server'
import { atb_uop_, atb_uop_engineering_, atb_uop_engineering_physics_ } from '../anchor/index.js'
import { footer_c_ } from '../footer/index.ts'
import { briantakita__header_ } from '../header/index.ts'
import { layout_c_ } from '../layout/index.js'
export function home_page_<env_T extends relement_env_T>({
	ctx,
	dehydrated_post_meta_a,
}:{
	ctx:request_ctx_T
	dehydrated_post_meta_a:dehydrated_post_meta_T[]
}):fragment_T {
	const unfeatured__dehydrated_post_meta_a =
		dehydrated_post_meta_a.filter(({ featured })=>!featured)
	const featured__dehydrated_post_meta_a =
		dehydrated_post_meta_a.filter(({ featured })=>featured)
	return (
		layout_c_({
			ctx
		}, [
			briantakita__header_({ ctx }),
			blog__main_fragment_<env_T>({ ctx }, [
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
						href: '/rss.xml',
						class: class_(
							'rss-link',
							'mb-6'),
						'aria-label': 'rss feed',
						title: 'RSS Feed',
					}, [
						svg_({
							xmlns: 'http://www.w3.org/2000/svg',
							class: class_(
								'rss-icon',
								'mb-2',
								'sm:mb-3',
								'h-6',
								'w-6',
								'scale-110',
								'sm:scale-125',
								'fill-skin-accent')
						}, [
							path_({ d: 'M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z' }),
							path_({ d: 'M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z' }),
							circle_({ cx: 6, cy: 18, r: 2 })
						])
					]),
					p_({ class: 'my-2' }, [
						`Full stack developer with over 20 years experience. Emphasizes efficient product development,
					consistent domain language, flat architectures, & code reuse. Graduated with a `,
						atb_uop_engineering_('Bachelor of Science'), ` in `,
						atb_uop_engineering_physics_('Engineering Physics'), ` from the `, atb_uop_(), `.`
					]),
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
							socials_div_({ ctx })
						])
						: undefined,
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
										href: `/posts/${post__slug__new(dehydrated_post_meta)}`,
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
							'pt-12',
							'pb-6')
					}, [
						h2_({
							class: class_(
								'text-2xl',
								'font-semibold',
								'tracking-wide')
						}, 'Recent Posts'),
						ul_(unfeatured__dehydrated_post_meta_a
							.slice(0, site__home__page__post_count_(ctx))
							.map(post=>
								blog_card__li_({
									href: `/posts/${post__slug__new(post)}`,
									dehydrated_post_meta: post,
									show_heading: false
								}))),
						div_({
							class: class_(
								'all-posts-btn-wrapper',
								'my-8',
								'text-center')
						}, [
							link_button_a_({ href: '/posts' }, [
								`All Posts`,
								svg_({
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									path_({
										d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'
									})
								])
							])
						])
					])
				])
			]),
			footer_c_({ ctx })
		])
	)
}
