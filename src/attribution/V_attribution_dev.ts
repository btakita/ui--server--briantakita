import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_attribution_dev<env_T extends relement_env_T>({ ctx }:{ ctx:Ctx }) {
	return (
		V_attribution<env_T>({
				ctx,
				attribution_id: '/assets/images/dev.svg'
			},
			V_atb<env_T>({ href: 'https://github.com/satnaing/astro-paper' },
				'Astro Paper'),
			'—',
			V_atb<env_T>({ href: 'https://github.com/satnaing/astro-paper/blob/main/LICENSE' },
				'MIT License'))
	)
}
