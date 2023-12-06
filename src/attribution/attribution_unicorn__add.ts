import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function attribution_unicorn__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({ ctx, attribution_id: '/assets/images/unicorn.jpg' },
			atb_({ href: 'https://www.deviantart.com/angel35w/art/Unicorn-Pukes-Rainbow-126388773' },
				'© 2009 - 2023 Angel35W'))
	)
}
