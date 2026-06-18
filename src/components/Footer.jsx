import { RocketLockup } from './RocketLogo'
import SocialIcons from './SocialIcons'
import { SERVICE_AREA, CURRENT_YEAR } from '../config/business'

const strip = (v) => (v || '').replace(/[[\]]/g, '')

export default function Footer() {
  return (
    <footer className="bg-navy-900 px-5 py-12 text-white md:px-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <RocketLockup tone="light" />
          <p className="font-body text-sm text-white/70">
            Serving {strip(SERVICE_AREA)} and surrounding areas
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <SocialIcons tone="light" />
          <p className="font-mono text-xs text-white/60">
            © {strip(CURRENT_YEAR)} Blast Off Cleaning
          </p>
        </div>
      </div>
    </footer>
  )
}
