import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function Attribution_box_arrow_up_right<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/box-arrow-up-right.svg' },
			V_atb({ href: 'https://icons.getbootstrap.com/icons/box-arrow-up-right/' },
				'icons.getbootstrap.com'),
			'—',
			V_atb({ href: 'https://getbootstrap.com/docs/4.0/about/license/' },
				'MIT License'))
	)
}
