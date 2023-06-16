import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoadingComponent from "./shared/loading/loading.component";

const PublicComponent = lazy(() =>
  import("./public/public/public.component.jsx")
);
const LoginComponent = lazy(() => import("./public/login/login.component.jsx"));
// const LoadingComponent = lazy(() =>
//   import("./shared/loading/loading.component.jsx")
// );

const StudentHomeComponent = lazy(() =>
  import("./private/student/home/home.component.jsx")
);
const AcademicHomeComponent = lazy(() =>
  import("./private/academic-staff/home/home.component.jsx")
);

// non-academic staff act as admin
const AdminHomeComponent = lazy(() =>
  import("./private/non-academic-staff/home/home.component.jsx")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/sda-uoj-system" />} />
          <Route
            path="/sda-uoj-system/*"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Routes>
                  <Route index path="/" element={<Navigate to="public" />} />
                  <Route path="public" element={<PublicComponent />} />
                  <Route path="login" element={<LoginComponent />} />
                  <Route path="loading" element={<LoadingComponent />} />

                  <Route
                    path="student/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route
                            path="home"
                            element={<StudentHomeComponent />}
                          />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route
                    path="academic-staff/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route
                            path="home"
                            element={<AcademicHomeComponent />}
                          />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route
                    path="non-academic-staff/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route path="home" element={<AdminHomeComponent />} />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route path="*" element={<Navigate to="/sda-uoj-system" />} />
                </Routes>
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/sda-uoj-system" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
