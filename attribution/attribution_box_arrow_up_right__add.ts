import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
export function attribution_box_arrow_up_right__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'box-arrow-up-right.svg'
		}, [
			tb_a_({
				href: 'https://icons.getbootstrap.com/icons/box-arrow-up-right/'
			}, 'icons.getbootstrap.com'),
			'—',
			tb_a_({
				href: 'https://getbootstrap.com/docs/4.0/about/license/'
			}, 'MIT License')
		])
	)
}
