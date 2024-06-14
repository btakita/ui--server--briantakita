import { class_ } from 'ctx-core/html'
import { div_, h1_ } from 'relementjs/html'
const sticky__base_class = class_('sticky', 'bg-skin-fill', 'text-skin-base', 'whitespace-nowrap',
	'relative',
	'[&>*]:w-full',
	'[&>*]:overflow-x-auto',
	'[&>*]:overflow-y-hidden',
	'[&>*]:sm:text-ellipsis',
	'[&>*]:m-0',
	'[&>*]:p-0',)
export const sticky__top__nav_class = class_(sticky__base_class, 'top-[4.5rem]', 'z-[49]')
export const sticky_h1__level_props_a1 = [
	class_(sticky__base_class, 'top-[5.75rem]', 'h-[2.75rem]', 'z-[48]', 'mb-0'),
	class_(sticky__base_class, 'top-[8.25rem]', 'h-[2.75rem]', 'z-[47]'),
	class_(sticky__base_class, 'top-[10.75rem]', 'h-[1.75rem]', 'z-[46]'),
	class_(sticky__base_class, 'top-[12.5rem]', 'z-[45]'),
	class_(sticky__base_class, 'top-[14.25rem]', 'z-[44]'),
	class_(sticky__base_class, 'top-[16rem]', 'z-[43]'),
]
export const sticky_h2__level_props_a1 = sticky_h1__level_props_a1.slice(1)
export function sticky__dl_tree_props_fn_(level_props_a1:string[]) {
	return (dl_tree_level:number)=>({
		class: 'prose',
		section_class: 'p-0',
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
export const sticky_header_class = class_(
	sticky_h1__level_props_a1[0],
	'relative',
)
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
