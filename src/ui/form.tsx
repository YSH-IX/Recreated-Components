'use client';

import React, { useState, forwardRef, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, cn } from '@/lib/utils';
import Link from 'next/link';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...rest }, ref) => (
    <input
      className={cn(
        'flex w-full items-center',
        'appearance-none rounded-md border border-neutral-400/60 bg-neutral-100',
        'px-3 py-2',
        'text-sm font-medium text-neutral-800',
        'outline-0 outline-neutral-400/60 focus:border-neutral-500 focus:outline-3',
        'easeOut transition-all duration-100',
        className,
      )}
      ref={ref}
      placeholder={placeholder}
      {...rest}
    />
  ),
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex select-none',
        'items-center',
        'justify-center',
        'w-full',
        'py-2.5',
        'rounded-xl',
        'text-sm',
        'font-semibold',
        'text-neutral-100',
        'transition-all',
        'duration-200',
        'ease-out',
        'will-change-transform',
        'active:scale-99',
        'cursor-pointer',
        className,
      )}
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
};

const EyeIcon = ({ className, ...rest }: { className: string }) => (
  <svg
    className={className}
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
  </svg>
);

const EyeClosedIcon = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"></path>
  </svg>
);

export const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submitForm = async (data: { email: string; password: string }) => {
    setLoading(true);

    console.log('Submitted', data);
    reset();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-transparent">
      <div
        className={cn(
          'shadow-[0_2px_2px_1px_rgba(0,0,0,0.1),0_4px_8px_0_rgba(0,0,0,0.1)]',
          'w-full max-w-[400px] rounded-2xl bg-neutral-50 px-10 py-8',
        )}
      >
        <form
          className={cn('flex flex-col items-start gap-4.5')}
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="w-full text-center">
            <div className="mx-auto mb-3 min-h-11 max-w-11 rounded-xl border border-neutral-950 bg-linear-to-b from-neutral-800 to-neutral-950 shadow-[inset_-1px_1px_1px_0_rgba(220,220,220,0.4)]"></div>
            <h2 className="bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-lg font-medium text-transparent">
              Sign In
            </h2>
          </div>

          {/* Email Input Field */}
          <div
            className={cn('relative flex w-full flex-col items-start gap-0.5')}
          >
            <label
              htmlFor="email"
              className={cn('block text-sm font-semibold text-neutral-600')}
            >
              Email
            </label>
            <Input
              placeholder="email@example.com"
              type="email"
              id="email"
              {...register('email')}
              autoComplete="email"
            />
            {errors.email && (
              <p className="absolute -bottom-5 left-0 text-xs font-medium text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input Field */}
          <div
            className={cn('relative flex w-full flex-col items-start gap-0.5')}
          >
            <label
              htmlFor="password"
              className={cn('block text-sm font-semibold text-neutral-600')}
            >
              Password
            </label>
            <div className="relative size-fit w-full">
              <Input
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="group absolute top-1/2 right-0 h-fit w-fit -translate-y-1/2 cursor-pointer p-3"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((val) => !val);
                }}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeClosedIcon className="pointer-events-none size-5 fill-neutral-500 group-hover:fill-neutral-700" />
                ) : (
                  <EyeIcon className="pointer-events-none size-5 fill-neutral-500 group-hover:fill-neutral-700" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="absolute -bottom-5 left-0 text-xs font-medium text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            className={cn(
              'mt-2',
              'border border-neutral-800',
              'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(12,12,12,0.2)]',
              'bg-linear-to-b',
              'from-neutral-700',
              'to-neutral-800',
              'hover:bg-neutral-900',
            )}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log In'}
          </Button>
        </form>
        <div
          className={cn(
            'relative my-4 text-center',
            'isolate after:absolute after:top-1/2 after:left-0 after:-z-1 after:h-px after:w-full after:bg-neutral-300',
          )}
        >
          <span className="bg-neutral-50 p-1.5 text-sm text-neutral-500">
            Or
          </span>
        </div>
        <Button
          className={cn(
            'gap-2',
            'bg-neutral-50',
            'shadow-[0_1px_1px_0_rgba(20,20,20,0.2),0_1px_1px_1px_rgba(20,20,20,0.1),inset_0_1px_0_0_rgba(20,20,20,0.1)]',
            'font-normal text-neutral-800 outline-none',
          )}
        >
          <GoogleIcon className="size-6" />
          <span>Continue with Google</span>
        </Button>
        <div className="div-center mt-6 items-center gap-1 text-sm text-neutral-600">
          <span>Don't have an account ?</span>
          <Link
            href={'/sign-up'}
            prefetch
            draggable={false}
            className="text-neutral-700 underline decoration-neutral-300 decoration-solid decoration-1 underline-offset-4 hover:text-neutral-800"
          >
            Sign up here
          </Link>
        </div>
      </div>

      {/*
      <Button
        className={cn(
          'mt-2',
          'border border-neutral-800',
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(12,12,12,0.2)]',
        )}
        onClick={googleLogin}
      >
        Login with Google
      </Button>
      */}
    </section>
  );
};

const GoogleIcon = ({ className, ...rest }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      className={className}
      {...rest}
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
};
