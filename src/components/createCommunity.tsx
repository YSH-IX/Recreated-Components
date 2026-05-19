'use client';

import { cn, createCommunitySchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { XIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type FormValues = {
  communityName: string;
  pricingAccess: 'free' | 'one-time' | 'monthly';
  isAppRequired: boolean;
};

export const CreateCommunity = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(createCommunitySchema),
    defaultValues: {
      communityName: 'Web3 Community',
      pricingAccess: 'free',
      isAppRequired: true,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  const pricingOptions = [
    { name: 'Free', value: 'free' },
    { name: 'One-time', value: 'one-time' },
    { name: 'Monthly', value: 'monthly' },
  ];
  return (
    <div className="div-center font-inter relative h-screen w-full bg-gray-100 px-3 dark:bg-neutral-900">
      <AnimatePresence>
        {/* Frosted Glass background + Dialog */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'div-center absolute z-20 inset-0 bg-white/10 backdrop-blur-2xl selection:bg-neutral-800 selection:text-neutral-200',
              'px-4 dark:bg-black/10 dark:selection:bg-neutral-200 dark:selection:text-neutral-800',
            )}
            ref={ref}
            onClick={(e) => {
              if (e.target === ref.current) {
                setIsOpen(false);
              }
            }}
          >
            {/* Actual FORM */}
            <motion.div
              initial={{ y: 10, opacity: 0.8, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{
                y: 10,
                opacity: 0.1,
                filter: 'blur(10px)',
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                stiffness: 100,
                damping: 10,
                mass: 0.1,
              }}
              className={cn(
                'w-full max-w-[550px] rounded-[28px] bg-neutral-200 p-3 dark:bg-neutral-800',
                'dark:shadow-[0_1px_2px_1px_rgba(8,8,8,0.2),0_4px_8px_0_rgba(8,8,8,0.6)]',
                'shadow-[0_1px_2px_1px_rgba(8,8,8,0.1),0_4px_8px_0_rgba(8,8,8,0.1)]',
              )}
            >
              <div className="flex flex-col rounded-2xl bg-neutral-100 px-4 pt-4 pb-5 md:p-8 dark:bg-neutral-900">
                <form
                  className="flex flex-col gap-3 md:gap-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex w-full items-center justify-between">
                    <h1 className="text-xl font-medium tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-100">
                      Create Community
                    </h1>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer text-neutral-600 transition-colors duration-150 ease-in-out hover:text-neutral-800 dark:text-neutral-600 dark:hover:text-neutral-200"
                    >
                      <XIcon
                        weight="regular"
                        color="currentColor"
                        size={22}
                        className="size-5 md:size-5.5"
                      />
                    </span>
                  </div>
                  <p className="text- text-sm text-neutral-600 dark:text-neutral-500">
                    Enter your community name and choose how people can join.
                    You can make it free, charge a fee, or require an
                    application.
                  </p>
                  {/* Community Name */}
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label
                      htmlFor="communityName"
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-400"
                    >
                      Community Name
                    </label>
                    <input
                      id="communityName"
                      type="text"
                      {...register('communityName')}
                      className={cn(
                        'rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-sm transition-all duration-200 ease-out outline-none focus:border-neutral-600 md:px-4.5 md:py-3.5 dark:focus:border-neutral-500',
                        'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100',

                        errors.communityName && 'border-red-400',
                      )}
                    />
                    {errors.communityName && (
                      <span className="text-xs text-red-400">
                        {errors.communityName.message as string}
                      </span>
                    )}
                  </div>

                  {/* pricingAccess */}
                  <Controller
                    control={control}
                    name="pricingAccess"
                    render={({ field }) => (
                      <div className="flex flex-col gap-1.5 md:gap-2">
                        <label
                          htmlFor="pricingAccess"
                          className="text-sm font-medium text-neutral-700 dark:text-neutral-400"
                        >
                          Access Type
                        </label>
                        <div
                          id="pricingAccess"
                          {...register('pricingAccess')}
                          className="grid w-full grid-cols-3 rounded-full bg-neutral-200 p-1 dark:bg-neutral-950"
                        >
                          {pricingOptions.map((item, idx) => {
                            const isActive = field.value === item.value;
                            return (
                              <div
                                defaultValue={item.value}
                                key={idx}
                                className="div-center relative col-span-1 h-10 w-full cursor-pointer rounded-full md:h-12"
                                onClick={() => field.onChange(item.value)}
                              >
                                <span
                                  className={cn(
                                    'relative z-10 text-sm font-semibold uppercase select-none dark:font-normal',
                                    isActive
                                      ? 'text-neutral-800 dark:text-neutral-200'
                                      : 'text-neutral-600 dark:text-neutral-400',
                                  )}
                                >
                                  {item.name}
                                </span>
                                {isActive && (
                                  <motion.div
                                    layoutId={`option`}
                                    className={cn(
                                      'absolute inset-0 rounded-full border border-neutral-300 will-change-transform dark:border-neutral-900',
                                      'dark:shadow-[inset_0_1px_1px_0_rgba(245,245,245,0.2)]',
                                      'shadow-[inset_0_1px_1px_0_rgba(11,11,11,0.1)]',
                                      'bg-linear-to-b from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900',
                                    )}
                                  ></motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {errors.pricingAccess && (
                          <span className="text-xs text-red-400">
                            {errors.pricingAccess.message as string}
                          </span>
                        )}
                      </div>
                    )}
                  />

                  {/* Application Requirement */}
                  <div className="my-1 flex items-center justify-between rounded-2xl border border-neutral-300 px-3 py-2 sm:my-1.5 md:px-4.5 md:py-3.5 dark:border-neutral-800">
                    <label
                      htmlFor="isAppRequired"
                      className="text-base text-neutral-700 dark:text-neutral-400"
                    >
                      Application required
                    </label>
                    <Controller
                      control={control}
                      name="isAppRequired"
                      render={({ field }) => (
                        <button
                          type="button"
                          onClick={() => field.onChange(!field.value)}
                          className={cn(
                            'flex w-12 cursor-pointer rounded-full border border-neutral-800 p-0.5 will-change-transform',
                            field.value ? 'bg-neutral-700' : 'bg-neutral-800',
                          )}
                        >
                          <motion.div
                            animate={{
                              x: field.value ? 20 : 0,
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 200,
                              damping: 10,
                              mass: 0.2,
                              bounce: 0.1,
                            }}
                            className="size-5.5 rounded-full bg-white"
                          />
                        </button>
                      )}
                    />
                  </div>
                  {/* T&C */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-500">
                    By creating a community, you agree to{' '}
                    <a href="#" className="underline underline-offset-2">
                      Payper's Community Guidelines
                    </a>
                  </p>
                  {/* Submit & Cancel Buttons  */}
                  <div className="mt-1 grid w-full grid-cols-2 gap-4 md:mt-2">
                    <button
                      type="reset"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'col-span-1 shrink-0 cursor-pointer rounded-full border border-neutral-200 bg-neutral-950/5 py-2.5 text-base font-medium text-neutral-800 transition-all outline-none hover:bg-neutral-200 active:scale-99 md:py-3',
                        'dark:border-neutral-600 dark:bg-neutral-950/10 dark:text-neutral-200 dark:hover:bg-neutral-950/50',
                      )}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={cn(
                        'col-span-1 shrink-0 cursor-pointer rounded-full border border-neutral-800 bg-neutral-900 py-2.5 text-base font-medium text-neutral-100 transition-all will-change-transform outline-none hover:bg-neutral-800 active:scale-99 md:py-3',
                        'dark:border-neutral-200 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-neutral-200',
                        'dark:shadow-[inset_0_0_10px_1px_rgba(11,11,11,0.5)]',
                        'shadow-[inset_0_0_10px_1px_rgba(255,255,255,0.2)]',
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="hidden md:block">Create Community</span>
                      <span className="block md:hidden">Create</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'cursor-pointer rounded-full border border-neutral-800 bg-neutral-800 px-10 py-3 text-base font-medium tracking-tight text-neutral-200 outline-none md:text-lg',
          'dark:border-neutral-200 dark:bg-neutral-100 dark:text-neutral-900',
          'shadow-[0_0_10px_2px_rgba(20,20,20,0.4),inset_0_1px_1px_0_rgba(245,245,245,0.3),inset_0_-1px_1px_0_rgba(245,245,245,0.2)]',
          'dark:shadow-[0_0_30px_0_rgba(245,245,245,0.3)]',
        )}
      >
        Open Commmunity Creator
      </button>
    </div>
  );
};
