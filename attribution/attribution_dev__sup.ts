import { type root_ctx_T } from '@rappstack/domain--any--blog'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
import { asset_path_a_ } from 'relysjs/server'
const [
	dev_svg,
] = await asset_path_a_(
	import('../public/assets/images/dev.svg'))
export function attribution_dev__sup_<env_T extends relement_env_T>({
	ctx
}:{ ctx:root_ctx_T }) {
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
