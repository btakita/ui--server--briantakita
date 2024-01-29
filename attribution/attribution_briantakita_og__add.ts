import { type root_ctx_T } from '@btakita/domain--any--blog'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function attribution_briantakita_og__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/briantakita-og.jpg'
		}, [
			atb_({
				href: 'https://www.flickr.com/photos/12972883@N00/193503222'
			}, 'Graph of Der letze Schrei - Blog'),
			' by ',
			atb_({
				href: 'https://www.flickr.com/photos/12972883@N00'
			}, 'jÖrg'),
			' is licensed under ',
			atb_({
				href: 'https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse'
			}, [
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
				})
			])
		])
	)
}
