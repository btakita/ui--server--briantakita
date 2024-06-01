import { class_ } from 'ctx-core/html'
const sticky__base_class = class_('sticky', 'bg-skin-fill', 'text-skin-base', 'whitespace-nowrap',
	'[&>*]:overflow-x-auto', '[&>*]:text-ellipsis')
export const sticky__top__nav_class = class_(sticky__base_class, 'top-[4.5rem]', 'z-[49]')
export const sticky_h1__level_props_a1 = [
	class_(sticky__base_class, 'top-[5.5rem]', 'z-[48]', 'mb-0'),
	class_(sticky__base_class, 'top-[7.875rem]', 'z-[47]'),
	class_(sticky__base_class, 'top-[9.625rem]', 'z-[46]'),
	class_(sticky__base_class, 'top-[11.375rem]', 'z-[45]'),
	class_(sticky__base_class, 'top-[13rem]', 'z-[44]'),
	class_(sticky__base_class, 'top-[14.75rem]', 'z-[43]'),
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
