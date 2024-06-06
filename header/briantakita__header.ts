import { button__a_ } from '@rappstack/ui--any/anchor'
import {
	blog__header_,
	blog__header__nav__li_,
	blog__header__nav__li__a_,
	blog__header__nav__li__a__svg_class_,
	blog__header__nav__li__a_class_
} from '@rappstack/ui--server--blog/header'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { path_, svg_ } from 'relementjs/svg'
type props_T = {
	ctx:wide_ctx_T
	active_link?:briantakita_header__link_T
}
export function briantakita__header_<env_T extends relement_env_T>($p:props_T) {
	const {
		ctx,
		active_link,
	} = $p
	return (
		blog__header_<env_T>({
			ctx,
			class: class_(
				'nofouc',
				'bg-skin-fill',
				'sticky',
				'top-0',
				'z-50',),
			logo_image_class: class_(
				'w-16',
				'h-10')
		}, [
			blog__header__nav__li_({}, [
				blog__header__nav__li__a_({
					active: active_('about'),
					href: '/about',
					class: 'text-nowrap',
				}, 'About')
			]),
			blog__header__nav__li_({}, [
				blog__header__nav__li__a_({
					active: active_('posts'),
					href: '/posts',
					class: 'text-nowrap',
				}, 'Posts')
			]),
			blog__header__nav__li_({}, [
				blog__header__nav__li__a_({
					active: active_('portfolio'),
					href: '/portfolio',
					class: 'text-nowrap',
				}, 'Portfolio')
			]),
			blog__header__nav__li_({}, [
				blog__header__nav__li__a_({
					active: active_('open-source'),
					href: '/open-source',
					class: 'text-nowrap',
				}, 'Open Source')
			]),
			blog__header__nav__li_({}, [
				blog__header__nav__li__a_({
					active: active_('tags'),
					href: '/tags',
					class: 'text-nowrap',
				}, 'Tags')
			]),
			blog__header__nav__li_({}, [
				button__a_({
					href: '/search',
					class: class_(
						'flex',
						'justify-center',
						'items-center',
						'focus-outline',
						'flex',
						'p-3',
						'sm:p-1',
						blog__header__nav__li__a_class_({
							active: active_('search'),
						})),
					'aria_label': 'search',
					title: 'Search'
				}, [
					svg_({
						xmlns: 'http://www.w3.org/2000/svg',
						class: class_(
							'scale-125',
							'sm:scale-100',
							blog__header__nav__li__a__svg_class_({
								active: active_('search'),
							}))
					}, [
						path_({
							d: 'M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'
						}),]),]),]),])
	)
	function active_(link:briantakita_header__link_T) {
		return active_link === link
	}
}
export type briantakita_header__link_T =
	|'about'
	|'portfolio'
	|'posts'
	|'open-source'
	|'search'
	|'tags'
