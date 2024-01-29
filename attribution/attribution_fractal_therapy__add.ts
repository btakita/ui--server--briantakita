import { type root_ctx_T } from '@btakita/domain--any--blog'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_fractal_therapy__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/fractal-therapy.jpg'
		}, [
			atb_({
				href: 'https://web.archive.org/web/20090816093348/http://www.synchronium.net/2009/07/02/5-books-that-really-will-expand-your-mind/comment-page-1'
			}, 'Possibly © 2009 - Synchronium'),
			'—',
			atb_({
				href: 'https://tineye.com/search/a5bd1885e1add649bad8c363d14ed3485a773cf3?sort=crawl_date&order=asc&page=1'
			}, 'tineye.com search')
		])
	)
}
