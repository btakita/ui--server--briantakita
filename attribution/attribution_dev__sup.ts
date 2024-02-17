import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import dev_svg from '../public/assets/images/dev.svg'
export function attribution_dev__sup_<env_T extends relement_env_T>({
	ctx
}:{ ctx:wide_ctx_T }) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: dev_svg
		}, [
			tb_a_({
				href: 'https://github.com/satnaing/astro-paper'
			}, 'Astro Paper'),
			'—',
			tb_a_({
				href: 'https://github.com/satnaing/astro-paper/blob/main/LICENSE'
			}, 'MIT License')
		])
	)
}
