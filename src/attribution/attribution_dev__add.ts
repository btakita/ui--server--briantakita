import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function attribution_dev__add<env_T extends relement_env_T>({ ctx }:{ ctx:Ctx }) {
	return (
		attribution__add<env_T>({
				ctx,
				attribution_id: '/assets/images/dev.svg'
			},
			atb_<env_T>({ href: 'https://github.com/satnaing/astro-paper' },
				'Astro Paper'),
			'—',
			atb_<env_T>({ href: 'https://github.com/satnaing/astro-paper/blob/main/LICENSE' },
				'MIT License'))
	)
}
