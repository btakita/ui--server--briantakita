import { type root_ctx_T } from '@btakita/domain--any--blog'
import { tb_a_ } from '@btakita/ui--server--blog/anchor'
import { attribution__sup_ } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_box_arrow_up_right__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: '/assets/images/box-arrow-up-right.svg'
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
