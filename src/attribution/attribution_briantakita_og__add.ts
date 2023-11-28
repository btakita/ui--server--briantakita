import { atb_, attribution__add } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function attribution_briantakita_og__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		attribution__add<env_T>({ ctx, attribution_id: '/assets/images/briantakita-og.jpg' },
			atb_<env_T>({ href: 'https://www.flickr.com/photos/12972883@N00/193503222' },
				'Graph of Der letze Schrei - Blog'),
			' by ',
			atb_<env_T>({ href: 'https://www.flickr.com/photos/12972883@N00' },
				'jÖrg'),
			' is licensed under ',
			atb_<env_T>({ href: 'https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse' },
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
