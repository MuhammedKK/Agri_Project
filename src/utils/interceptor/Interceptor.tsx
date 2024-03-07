import { AxiosInstance } from "axios";
import store from "../../store/store";
import { LoaderActions } from "../../store/reducers/slices/Loader.slice";

const Interceptor = (axiosInstance: AxiosInstance) => {
  let requestsNumber = 0;
  axiosInstance.interceptors.request.use(
    (config) => {
      requestsNumber += 1;
      store.dispatch(LoaderActions.loading({ loading: true }));
      return config;
    },
    (error) => {
      requestsNumber -= 1;
      store.dispatch(LoaderActions.loading({ loading: requestsNumber > 0 }));
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      requestsNumber -= 1;
      store.dispatch(LoaderActions.loading({ loading: requestsNumber > 0 }));
      return response;
    },
    (error) => {
      requestsNumber -= 1;
      store.dispatch(LoaderActions.loading({ loading: requestsNumber > 0 }));
      return Promise.reject(error);
    }
  );
};

export default Interceptor;
