import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function attribution_box_arrow_up_right__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({ ctx, attribution_id: '/assets/images/box-arrow-up-right.svg' },
			atb_({ href: 'https://icons.getbootstrap.com/icons/box-arrow-up-right/' },
				'icons.getbootstrap.com'),
			'—',
			atb_({ href: 'https://getbootstrap.com/docs/4.0/about/license/' },
				'MIT License'))
	)
}
