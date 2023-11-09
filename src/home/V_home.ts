import { type Post, post__slug__new } from '@btakita/domain--all--blog'
import { site__home__page__post_count_ } from '@btakita/domain--server--blog'
import { V_card } from '@btakita/ui--all--blog'
import { V_hr, V_link_button } from '@btakita/ui--server--blog/src/html_tag'
import { V_main } from '@btakita/ui--server--blog/src/main'
import { V_socials } from '@btakita/ui--server--blog/src/social'
import { type Ctx } from '@ctx-core/object'
import { H_, S_ } from '@ctx-core/vanjs'
import { V_atb_uop, V_atb_uop_engineering, V_atb_uop_engineering_physics } from '../anchor'
import './V_home.css'
export function V_home({ ctx, featured__posts, posts, social__count }:{
	ctx:Ctx
	posts:Post[]
	featured__posts:Post[]
	social__count:number
}) {
	const H = H_(ctx)
	const S = S_(ctx)
	return (
		V_main({ ctx },
			H.section({ id: 'hero' },
				H.h1({ class: 'mr-2' }, `Brian Takita`),
				H.a({
						target: '_blank',
						href: '/rss.xml',
						class: 'rss-link',
						'aria-label': 'rss feed',
						title: 'RSS Feed',
					},
					S.svg({ xmlns: 'http://www.w3.org/2000/svg', class: 'rss-icon' },
						S.path({ d: 'M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z' }),
						S.path({ d: 'M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z' }),
						S.circle({ cx: 6, cy: 18, r: 2 }))),
				H.p(
					`Full stack developer with over 20 years experience. Emphasizes efficient product development,
					consistent domain language, flat architectures, & code reuse. Graduated with a `,
					V_atb_uop_engineering({ ctx, innerText: 'Bachelor of Science' }),
					` in `,
					V_atb_uop_engineering_physics({ ctx, innerText: 'Engineering Physics' }),
					` from the `,
					V_atb_uop({ ctx }),
					`.`
				),
				social__count > 0 ?
					H.div({ class: 'social-wrapper' },
						H.div({ class: 'social-links' }),
						V_socials({ ctx }))
					: undefined,
				V_hr({ ctx }),
				featured__posts.length > 0
					? [
						H.section({ id: 'featured' },
							H.h2(`Featured`),
							H.ul(featured__posts.map(post=>
								V_card({
									ctx,
									href: `/posts/${post__slug__new(post)}`,
									post,
									show_heading: false
								})
							)))
					] : undefined,
				V_hr({ ctx }),
				H.section({ id: 'recent-posts' },
					H.h2(`Recent Posts`),
					H.ul(
						posts
						.filter(({ data })=>!data.featured)
						.slice(0, site__home__page__post_count_(ctx))
						.map((post, index)=>
							V_card({
								ctx,
								href: `/posts/${post__slug__new(post)}`,
								post,
								show_heading: false
							}))),
					H.div({ class: 'all-posts-btn-wrapper' },
						V_link_button({ ctx, href: '/posts' },
							`All Posts`,
							S.svg({ xmlns: 'http://www.w3.org/2000/svg' },
								S.path(
									{ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' })))))))
	)
}
