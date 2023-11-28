import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_attribution_fractal_therapy<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/fractal-therapy.jpg' },
			V_atb({
					ctx,
					href: 'https://web.archive.org/web/20090816093348/http://www.synchronium.net/2009/07/02/5-books-that-really-will-expand-your-mind/comment-page-1'
				},
				'Possibly © 2009 - Synchronium'),
			'—',
			V_atb({
					ctx,
					href: 'https://tineye.com/search/a5bd1885e1add649bad8c363d14ed3485a773cf3?sort=crawl_date&order=asc&page=1'
				},
				'tineye.com search'))
	)
}
