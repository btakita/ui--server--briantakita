import { type Post, post__slug__new } from '@btakita/domain--any--blog'
import { site__home__page__post_count_ } from '@btakita/domain--server--blog'
import { blog__card_c_ } from '@btakita/ui--any--blog'
import { hr_c_, link_button_c_, blog__main_c_, socials_c_ } from '@btakita/ui--server--blog'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { a_, div_, h1_, h2_, p_, section_, ul_ } from 'relementjs/html'
import { circle_, path_, svg_ } from 'relementjs/svg'
import { atb_uop_, atb_uop_engineering_, atb_uop_engineering_physics_ } from '../anchor/index.js'
import './briantakita__home_c.css'
export function briantakita__home_c_<env_T extends relement_env_T>({ ctx, featured__posts, posts, social__count }:{
	ctx:Ctx
	posts:Post[]
	featured__posts:Post[]
	social__count:number
}) {
	return (
		blog__main_c_<env_T>({ ctx },
			section_({ id: 'hero' },
				h1_({ class: 'mr-2' }, `Brian Takita`),
				a_({
						target: '_blank',
						href: '/rss.xml',
						class: 'rss-link',
						'aria-label': 'rss feed',
						title: 'RSS Feed',
					},
					svg_({ xmlns: 'http://www.w3.org/2000/svg', class: 'rss-icon' },
						path_({ d: 'M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z' }),
						path_({ d: 'M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z' }),
						circle_({ cx: 6, cy: 18, r: 2 }))),
				p_(
					`Full stack developer with over 20 years experience. Emphasizes efficient product development,
					consistent domain language, flat architectures, & code reuse. Graduated with a `,
					atb_uop_engineering_('Bachelor of Science'), ` in `,
					atb_uop_engineering_physics_('Engineering Physics'), ` from the `, atb_uop_(), `.`),
				social__count > 0 ?
					div_({ class: 'social-wrapper' },
						div_({ class: 'social-links' }),
						socials_c_<env_T>({ ctx }))
					: undefined,
				hr_c_<env_T>(),
				featured__posts.length > 0
					? [
						section_({ id: 'featured' },
							h2_(`Featured`),
							ul_(featured__posts.map(post=>
								blog__card_c_<env_T>({
									ctx,
									href: `/posts/${post__slug__new(post)}`,
									post,
									show_heading: false
								})
							)))
					] : undefined,
				hr_c_<env_T>(),
				section_({ id: 'recent-posts' },
					h2_('Recent Posts'),
					ul_(
						posts
							.filter(({ data })=>!data.featured)
							.slice(0, site__home__page__post_count_(ctx))
							.map((post, index)=>
								blog__card_c_({
									ctx,
									href: `/posts/${post__slug__new(post)}`,
									post,
									show_heading: false
								}))),
					div_({ class: 'all-posts-btn-wrapper' },
						link_button_c_<env_T>({ href: '/posts' },
							`All Posts`,
							svg_({ xmlns: 'http://www.w3.org/2000/svg' },
								path_(
									{ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' })))))))
	)
}
