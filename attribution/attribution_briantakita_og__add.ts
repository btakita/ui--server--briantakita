import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { img_ } from 'relementjs/html'
export function attribution_briantakita_og__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'briantakita-og.jpg'
		}, [
			tb_a_({
				href: 'https://www.flickr.com/photos/12972883@N00/193503222',
				nofollow: true
			}, 'Graph of Der letze Schrei - Blog'),
			' by ',
			tb_a_({
				href: 'https://www.flickr.com/photos/12972883@N00',
				nofollow: true
			}, 'jÖrg'),
			' is licensed under ',
			tb_a_({
				href: 'https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse',
				nofollow: true
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
