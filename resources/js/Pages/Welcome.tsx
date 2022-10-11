import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import useRoute from '@/Hooks/useRoute'
import { PrimaryButtonLink } from '@/Components/Forms/PrimaryButton'
import { SizeWatcher } from '@/Components/SizeWatcher'
import { ApplicationLogo } from '@/Components/ApplicationLogo'

const WelcomePage = () => {
  const route = useRoute()

  return (
    <SizeWatcher isFullScreen>
      {({ width, height }) => (
        <div style={{ width, height }} className="flex flex-col overflow-auto">
          <Head title="Welcome" />
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-white py-4 landscape:py-12">
            <img
              src="/sprites/logo-ava.svg"
              alt="Welcome to the AVA Conference"
              className="w-5/12"
            />
            <h1 className="text-base">Welcome to AVA</h1>
          </div>
          <div className="grid grid-cols-4">
            <div className="grid place-items-center bg-white">
              <img
                src="/sprites/animals/rooster.gif"
                className="w-1/2"
                alt=""
              />
            </div>
            <div className="grid aspect-square place-items-center bg-gray-200">
              <img src="/sprites/animals/pig.gif" className="w-1/2" alt="" />
            </div>
            <div className="grid aspect-square place-items-center bg-white">
              <img src="/sprites/animals/sheep.gif" className="w-1/2" alt="" />
            </div>
            <div className="grid aspect-square place-items-center bg-gray-200">
              <img
                src="/sprites/animals/chicken.gif"
                className="w-1/2"
                alt=""
              />
            </div>
            <div className="grid aspect-square place-items-center bg-gray-200">
              <img
                src="/sprites/animals/fish-blue.gif"
                className="w-3/4"
                alt=""
              />
            </div>
            <div className="grid aspect-square place-items-center bg-white">
              <img src="/sprites/animals/cow.gif" className="w-1/2" alt="" />
            </div>
            <div className="grid aspect-square place-items-center bg-gray-200">
              <img src="/sprites/animals/duck.gif" className="w-1/2" alt="" />
            </div>
            <div className="grid aspect-square place-items-center bg-white">
              <img src="/sprites/animals/goat.gif" className="w-1/2" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="aspect-square bg-neutral-900 bg-opacity-70" />
            <div className="col-span-2 grid place-items-center bg-neutral-700">
              <PrimaryButtonLink
                href={route('route_based_on_email.show')}
                className="nes-btn is-primary landscape:scale-150"
              >
                Continue
              </PrimaryButtonLink>
            </div>
            <div className="aspect-square bg-neutral-900 bg-opacity-90" />
            <div className="relative col-span-4 grid grid-cols-4">
              <div className="aspect-square bg-neutral-900 bg-opacity-90" />
              <div className="aspect-square bg-neutral-900 bg-opacity-70" />
              <div className="aspect-square bg-neutral-900 bg-opacity-90" />
              <div className="aspect-square bg-neutral-900 bg-opacity-70" />
              <div className="aspect-square bg-neutral-900 bg-opacity-70" />
              <div className="aspect-square bg-neutral-900 bg-opacity-90" />
              <div className="aspect-square bg-neutral-900 bg-opacity-70" />
              <div className="aspect-square bg-neutral-900 bg-opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <ApplicationLogo className="h-1/2" />
                <h2 className="text-sm text-white">Vegan Hacktivists</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </SizeWatcher>
  )
}

export default WelcomePage
