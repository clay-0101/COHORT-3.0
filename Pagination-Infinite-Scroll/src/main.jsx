import { createRoot } from 'react-dom/client'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Pagination from './Pagination.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
  <Pagination/>
</QueryClientProvider>
)
