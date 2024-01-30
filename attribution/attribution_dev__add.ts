import { type root_ctx_T } from '@btakita/domain--any--blog'
import { tb_a_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_dev__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/dev.svg'
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
