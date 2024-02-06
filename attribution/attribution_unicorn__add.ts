import { type root_ctx_T } from '@rappstack/domain--any--blog'
import { tb_a_ } from '@rappstack/ui--server--blog/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_unicorn__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: '/assets/images/unicorn.jpg'
		}, [
			tb_a_({
				href: 'https://www.deviantart.com/angel35w/art/Unicorn-Pukes-Rainbow-126388773'
			}, '© 2009 - 2023 Angel35W')
		])
	)
}
