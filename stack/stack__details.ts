import { tag_class } from '@rappstack/ui--server--blog/tag'
import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { details_, span_, summary_ } from 'relementjs/html'
import { heroicons_chevron_double_left_, heroicons_chevron_double_right_ } from '../icon/index.js'
export function stack__details_(...a__a1:(($p:{ class?:string })=>tag_dom_T)[]) {
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
				heroicons_chevron_double_right_({
					class: class_(
						'inline-block',
						'group-open:hidden',
						'h-6',
						'w-4',
						'mr-1')
				}),
				heroicons_chevron_double_left_({
					class: class_(
						'hidden',
						'group-open:inline-block',
						'h-4',
						'w-4',
						'mr-1')
				}),
				'Stack'
			]),
			span_(a__a1.map(a_=>[a_({ class: tag_class }), ' ']))
		])
	)
}
