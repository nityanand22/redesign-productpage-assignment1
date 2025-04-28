import { BiGlobe, BiMessageSquare, BiTrendingUp } from 'react-icons/bi'
import { CgLock } from 'react-icons/cg'
import { FaUsers } from 'react-icons/fa'
import { LuBuilding2 } from 'react-icons/lu'

export const features = [
    {
        icon: <BiGlobe className="w-6 h-6 text-primary" />,
        title: 'Online Website With AI Agent',
        description: 'Intelligent digital presence',
    },
    {
        icon: <LuBuilding2 className="w-6 h-6 text-primary" />,
        title: 'Build Digital Business',
        description: 'Scale your operations',
    },
    {
        icon: <BiMessageSquare className="w-6 h-6 text-primary" />,
        title: 'Patient Conversation',
        description: 'Seamless communication',
    },
    {
        icon: <BiTrendingUp className="w-6 h-6 text-primary" />,
        title: 'Boost Revenue',
        description: 'Increase your earnings',
    },
    {
        icon: <FaUsers className="w-6 h-6 text-primary" />,
        title: 'Lead Generation Support',
        description: 'Convert visitors to clients',
    },
    {
        icon: <CgLock className="w-6 h-6 text-primary" />,
        title: '24/7 Support for patient',
        description: 'Round-the-clock assistance',
    },
]
