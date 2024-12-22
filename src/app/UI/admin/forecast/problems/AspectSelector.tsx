import Select from 'react-select'
import { aspects } from '@/business/constants'

const aspectOptions = Object.entries(aspects).map(([value, label]) => ({ label, value }))

const AspectSelector = () => <Select closeMenuOnSelect={false} isMulti options={aspectOptions} />

export default AspectSelector
