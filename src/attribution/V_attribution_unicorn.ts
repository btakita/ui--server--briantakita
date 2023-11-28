import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_attribution_unicorn<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/unicorn.jpg' },
			V_atb<env_T>({ ctx, href: 'https://www.deviantart.com/angel35w/art/Unicorn-Pukes-Rainbow-126388773' },
				'© 2009 - 2023 Angel35W'))
	)
}
