// assets
import { DashboardOutlined , CarTwoTone , AlertTwoTone, FileTextTwoTone} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  CarTwoTone,
  AlertTwoTone,
  FileTextTwoTone
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'devices',
      title: 'Devices',
      type: 'item',
      url: '/dummy',
      icon: icons.CarTwoTone,
      breadcrumbs: false
    },
    {
      id: 'alerts',
      title: 'Manage Alerts',
      type: 'item',
      url: '/dummy',
      icon: icons.AlertTwoTone,
      breadcrumbs: false
    },
    {
      id: 'summay',
      title: 'Service Summary',
      type: 'item',
      url: '/dummy',
      icon: icons.FileTextTwoTone,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
