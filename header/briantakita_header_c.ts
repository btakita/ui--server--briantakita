import { type root_ctx_T } from '@btakita/domain--any--blog'
import { header_c_ } from '@btakita/ui--server--blog/header'
import { link_button_c_ } from '@btakita/ui--server--blog/html'
import { theme__toggle_button_c_ } from '@btakita/ui--server--blog/theme'
import { SITE } from 'briantakita.me/src/config.ts'
import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { a_, li_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
export function briantakita_header_c_<env_T extends relement_env_T>({
	ctx,
	active,
}:{
	ctx:root_ctx_T
	active?:active_T
}) {
	return (
		header_c_<env_T>({ ctx }, [
			li_([
				a_({ href: '/about', class: active_class_('about') },
					'About')
			]),
			li_([
				a_({ href: '/posts', class: active_class_('posts') },
					'Posts')
			]),
			li_([
				a_({ href: '/portfolio', class: active_class_('portfolio') },
					'Portfolio')
			]),
			li_([
				a_({ href: '/open-source', class: active_class_('open-source') },
					'Open Source')
			]),
			li_([
				a_({ href: '/tags', class: active_class_('tags') },
					'Tags')
			]),
			li_([
				link_button_c_({
					href: '/search',
					class: class_(
						'focus-outline',
						'flex',
						'p-3',
						'sm:p-1',
						active === 'search' ? 'active' : ''),
					'aria-label': 'search',
					title: 'Search'
				}, [
					svg_({
						xmlns: 'http://www.w3.org/2000/svg',
						class: 'scale-125 sm:scale-100'
					}, [
						path_({
							d: 'M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'
						})
					])
				])
			]),
			SITE.light_and_dark_mode
			&& li_(theme__toggle_button_c_({ ctx }))
		])
	)
	function active_class_(_active:active_T) {
		return active === _active ? 'active' : ''
	}
}
type active_T = 'about'|'portfolio'|'posts'|'open-source'|'search'|'tags'
