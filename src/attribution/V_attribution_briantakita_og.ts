import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function V_attribution_briantakita_og<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/briantakita-og.jpg' },
			V_atb<env_T>({ ctx, href: 'https://www.flickr.com/photos/12972883@N00/193503222' },
				'Graph of Der letze Schrei - Blog'),
			' by ',
			V_atb<env_T>({ ctx, href: 'https://www.flickr.com/photos/12972883@N00' },
				'jÖrg'),
			' is licensed under ',
			V_atb<env_T>({ ctx, href: 'https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse' },
				'CC BY-SA 2.0 ',
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				}),
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/by.svg',
					style: 'height: 1em; margin-right: 0.125em;display: inline;'
				}),
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/sa.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				})))
	)
}
