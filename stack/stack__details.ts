import { class_ } from 'ctx-core/html'
import { raw_, tag_dom_T } from 'relementjs'
import { details_, span_, summary_ } from 'relementjs/html'
export function stack__details_(...a_a1:tag_dom_T[]) {
	return (
		details_({
			class: class_(
				'block',
				'select-none',
				'w-full',
				'mb-4',
				'overflow-hidden',
				'text-skin-base',
				'focus-outline',
				'cursor-pointer',
				'group')
		}, [
			summary_({
				class: class_(
					'block',
					'float-right')
			}, [
				span_({
					class: class_(
						'inline-block',
						'group-open:hidden',
						'mr-1')
				}, '→'),
				span_({
					class: class_(
						'hidden',
						'group-open:inline-block',
						'mr-1')
				}, raw_('←')),
				'Stack'
			]),
			span_(a_a1.map(a=>[a, ' ']))
		])
	)
}
