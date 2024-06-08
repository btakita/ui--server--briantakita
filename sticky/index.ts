import { class_ } from 'ctx-core/html'
import { div_, h1_ } from 'relementjs/html'
const sticky__base_class = class_('sticky', 'bg-skin-fill', 'text-skin-base', 'whitespace-nowrap',
	'relative',
	'[&>*]:w-full',
	'[&>*]:overflow-x-auto',
	'[&>*]:text-ellipsis',
	'[&>*]:m-0',
	'[&>*]:p-0',)
export const sticky__top__nav_class = class_(sticky__base_class, 'top-[4.5rem]', 'z-[49]')
export const sticky_h1__level_props_a1 = [
	class_(sticky__base_class, 'top-[5.75rem]', 'h-[11]', 'z-[48]', 'mb-0'),
	class_(sticky__base_class, 'top-[8.25rem]', 'h-8', 'z-[47]'),
	class_(sticky__base_class, 'top-[10rem]', 'h-[7]', 'z-[46]'),
	class_(sticky__base_class, 'top-[11.75rem]', 'z-[45]'),
	class_(sticky__base_class, 'top-[13.5rem]', 'z-[44]'),
	class_(sticky__base_class, 'top-[15.25rem]', 'z-[43]'),
]
export const sticky_h2__level_props_a1 = sticky_h1__level_props_a1.slice(1)
export function sticky__dl_tree_props_fn_(level_props_a1:string[]) {
	return (dl_tree_level:number)=>({
		class: 'prose',
		dt_class: class_(level_props_a1[dl_tree_level], 'mt-2'),
		dd_class: 'prose mb-4',
	})
}
export const sticky_h1__dl_tree_props_ = sticky__dl_tree_props_fn_(sticky_h1__level_props_a1)
export const sticky_h2__dl_tree_props_ = sticky__dl_tree_props_fn_(sticky_h2__level_props_a1)
type sticky__h1_props_T = {
	class?:string
	h1_class?:string
	title:string
}
export function sticky__h1_($p:sticky__h1_props_T) {
	return (
		div_({
			class: class_(
				sticky_h1__level_props_a1[0],
				$p.class)
		}, [
			div_([
				h1_({
					class: class_(
						'inline',
						$p.h1_class),
				}, $p.title),
			])
		])
	)
}
