import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'

export default function BasicBreadcrumbs({
  title,
  prevRoutePath,
  prevRouteTitle
}) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={prevRoutePath} className="hover:underline">
          {prevRouteTitle}
        </Link>
        <Typography color="text.primary" className="font-bold">
          {title}
        </Typography>
      </Breadcrumbs>
    </div>
  )
}
