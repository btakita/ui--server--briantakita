import { hr_div_ } from '@rappstack/ui--server--blog/hr'
import { socials__div_ } from '@rappstack/ui--server--blog/social'
import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { div_, footer_, span_ } from 'relementjs/html'
export function briantakita__footer_<env_T extends relement_env_T>({
	ctx,
	no_margin_top,
}:{
	ctx:wide_ctx_T,
	no_margin_top?:boolean
}) {
	return (
		footer_<env_T>({
			class: class_(
				'w-full',
				!no_margin_top
					? 'mt-auto'
					: undefined)
		}, [
			hr_div_({ no_padding: true }),
			div_({
				class: class_(
					'footer-wrapper',
					'flex',
					'flex-col',
					'sm:flex-row-reverse',
					'items-center',
					'justify-between',
					'py-6',
					'sm:py-4')
			}, [
				socials__div_({
					ctx,
					centered: true,
					link_button_class: class_(
						'my-1',
						'p-2',
						'hover:rotate-6',
						'[&>svg]:scale-125')
				}),
				div_({
					class: class_(
						'copyright-wrapper',
						'my-2',
						'flex',
						'flex-col',
						'items-center',
						'whitespace-nowrap',
						'sm:flex-row')
				}, [
					span_([
						'Copyright ',
						raw_('&#169;'),
						' ',
						new Date().getFullYear(),
						' All rights reserved.'
					]),
				])
			])
		])
	)
}
