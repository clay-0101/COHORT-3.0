import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { store } from './app/store'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AppRoute />
            <ToastContainer />
        </Provider>
    </QueryClientProvider>
)
