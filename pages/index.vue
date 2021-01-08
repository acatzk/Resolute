<template>
  <!-- three columns -->
  <div class="flex">
    <!-- left side bar -->
    <div class="w-left h-full border-r border-gray-400 min-h-screen flex-shrink-0">
      <SideBar :links="links">
        <template #default="{ link }">
          <li class="group flex items-center py-2 pl-4 my-1 cursor-pointer text-gray-600"
              :class="`${setLink === link.title ? 'bg-white border-l-4 border-blue-resolute' : 'border-l-4 border-transparent'}`"
              @click="setLink = link.title">
            <span v-html="link.icon" :class="setLink === link.title ? 'text-blue-resolute group-hover:text-blue-resolute' : 'group-hover:text-gray-700'"></span>
            <span class="pl-3 text-sm group-hover:text-gray-700">{{ link.title }}</span>
          </li>
        </template>
      </SideBar>
    </div>
    <!-- middle content -->
    <div class="flex-1">
      <div class="text-sm px-2 py-2 border-b border-gray-400 mb-4 flex items-center">
        <span class="px-2 rounded hover:bg-gray-100">
          <a class="text-blue-resolute" href="#">Contacts</a>
        </span>
        <span>
          <svg class="w-5 h-5 text-gray-600" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="px-2 rounded hover:bg-gray-100">
          <a class="text-blue-resolute" href="#">Joshua Galit</a>
        </span>
        <span>
          <svg class="w-5 h-5 text-gray-600" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="px-2">
          <a class="text-gray-600" href="#">Properties</a>
        </span>
      </div>

      <div class="container mx-auto max-w-5xl py-6 px-8">
        
        <div class="flex items-center space-x-3">
          <span>
            <svg class="w-6 h-6 text-blue-resolute" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
          </span>
          <span class="uppercase text-3xl text-gray-700 tracking-wide">
            GALDZO2R415ZK
          </span>
          <span class="uppercase font-bold text-xs rounded-full px-2 bg-blue-resolute-dark text-white tracking-wide">
            Active
          </span>
        </div>
        <span class="text-sm text-gray-700">123 Main St., Galveston, TX 77555</span>

        <div class="mt-5 space-y-5">
          <CardDetails :borderColor="`border-t-4 border-blue-resolute`">
            <template #card-header>
              <h2 class="text-lg font-semibold">Details</h2>
              <p class="mt-3 text-gray-700 text-sm leading-normal">
                Information about this property only. Owner Name, Protest Address and CAD Mailing address must math the country's records
              </p>
              <p class="mt-3 text-gray-700 text-sm leading-normal">
                If you need to update contact, you may do so in the contact page for <a href="#" class="text-blue-resolute hover:underline">Bart Simpson</a>
              </p>
            </template>
            <template #card-content>
              <div class="flex flex-wrap">
                <div class="w-1/2">
                  <label class="block text-gray-800 text-base">PID</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="GALDZO2R415ZK">
                </div>
                <div class="w-1/2 pl-4">
                  <label class="block text-gray-800 text-base">CAD Owner Name</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="Bart Simpson">
                </div>
                <div class="w-full mt-4">
                  <label class="block text-gray-800 text-base">Post Address</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="123 Main St., Galveston, TX 77555">
                </div>
                <div class="w-full mt-4">
                  <label class="block text-gray-800 text-base">CAD Mailing Address</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="123 Fake St., Galveston, TX 77555">
                </div>
                <div class="w-1/3 mt-4">
                  <label class="block text-gray-800 text-base">Fee Rate</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="40">
                </div>
                <div class="w-1/3 pl-4 mt-4">
                  <label class="block text-gray-800 text-base">Start Year</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="2021">
                </div>
                <div class="w-1/3 pl-4 mt-4">
                  <label class="block text-gray-800 text-base">Agency End Date</label>
                  <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text" value="">
                </div>
              </div>
            </template>
          </CardDetails>

          <CardDetails :borderColor="`border-t-4 border-blue-resolute`">
            <template #card-header>
              <h2 class="text-lg font-semibold">Flags</h2>
              <p class="mt-3 text-gray-700 text-sm leading-normal">
                Flags are just like tags. We have "flags" for many common situations where a property might require extra attention.
              </p>
            </template>
            <template #card-content>
              <table class="table-auto w-full">
                <thead class="border-b">
                  <tr class="text-left">
                    <th class="px-4 py-2"></th>
                    <th class="px-4 py-2">Year</th>
                    <th class="px-4 py-2">Flag</th>
                    <th class="px-4 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-4 py-2">
                      <input type="checkbox">
                    </td>
                    <td class="px-4 py-2">Ongoing</td>
                    <td class="px-4 py-2">
                      <div class="flex items-center font-medium text-red-600">
                        <span class="text-xl">&bull;</span>
                        <span class="ml-2">Harvey</span>
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <div class="text-sm">Fence fell over in Hurricane Harvey</div>
                      <div class="text-sm text-gray-600">Applied by Aaron on April 15, 2018 10:37 AM</div>
                    </td>
                  </tr>
                  <tr class="mt-2">
                    <td class="px-4 py-2">
                      <input type="checkbox">
                    </td>
                    <td class="px-4 py-2">2017</td>
                    <td class="px-4 py-2">
                      <div class="flex items-center font-medium text-red-600">
                        <span class="text-xl">&bull;</span>
                        <span class="ml-2">Litigation</span>
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <div class="text-sm">N/A</div>
                      <div class="text-sm text-gray-600">Applied by System on April 4, 2018 8:13 AM</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-xs bg-gray-200 text-gray-600 font-semibold py-1 px-3">
                Show 2 older flags
              </div>
              <a href="#" class="flex items-center mt-4">
                <span>
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                </span>
                <span class="uppercase text-sm font-semibold tracking-wide text-gray-800">Apply new flag</span>
              </a>
            </template>
          </CardDetails>

          <CardDetails :borderColor="`border-t-4 border-blue-resolute`">
            <template #card-header>
              <h2 class="text-lg font-semibold">AOAs</h2>
              <p class="mt-3 text-gray-700 text-sm leading-normal">
                Here you'll see all the AOAs we've ever had for this property. The active one is at the top, the rest are just there for auditing purposes.
              </p>
            </template>
            <template #card-content>
              <table class="table-auto w-full">
                <thead class="border-b">
                  <tr class="text-left">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Status</th>
                    <th class="px-4 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-4 py-2 mt-2 flex flex-col">
                      <span class="text-sm text-blue-resolute leading-tight">AOA 22228</span>
                      <span class="text-xxs text-gray-500 font-medium">Signed</span>
                    </td>
                    <td class="px-4 py-2">
                      <div class="flex items-center font-medium text-green-600">
                        <span class="text-xl">&bull;</span>
                        <span class="ml-2">No Issues</span>
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <div class="text-xs">If there's a problem with this AOA, you can <span class="text-blue-resolute">make an AOA issue.</span></div>
                      <div class="text-xs text-gray-600">Applied by Aaron on April 15, 2018 10:37 AM</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#" class="flex items-center mt-4">
                <span>
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                </span>
                <span class="uppercase text-sm font-semibold tracking-wide text-gray-800">Create new AoA</span>
              </a>
            </template>
          </CardDetails>

          <CardDetails :borderColor="`border-t-4 border-red-700`">
            <template #card-header>
              <h2 class="text-lg font-semibold">Cancel</h2>
            </template>
            <template #card-content>
              <div class="border border-yellow-400 border-t-4 px-4 py-4 mt-1 rounded w-full bg-yellow-50 text-sm text-yellow-900 flex">
                <span>
                  <svg class="w-6 h-6" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                </span>
                <span class="ml-2 leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eveniet odit totam vero molestiae dicta ab voluptatibus, id numquam ducimus aliquid tempore et eius soluta architecto vel? Tempora, molestias inventore?
                </span>
              </div>
              
              <div class="w-full mt-3">
                <label class="block text-gray-800 text-base">Reason</label>
                <input class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3" type="text">
              </div>
              <div class="w-full mt-4">
                <label class="block text-gray-800 text-base">Note</label>
                <textarea class="w-full text-base bg-gray-100 border border-gray-300 outline-none rounded py-3 px-3">
                </textarea>
              </div>
              <div class="mt-2 flex items-center text-gray-700">
                <input type="checkbox">
                <span class="ml-2 text-sm">I want to cancel this property, which has a situs of 123 Main St, Galveston, TX 77555</span>
              </div>
              <div class="my-3 flex items-center text-gray-700 pb-5 border-b border-gray-400">
                <input type="checkbox">
                <span class="ml-2 text-sm truncate">Mark this client as "Do Not Contact". If we are still on good terms with this person, don't check this box.</span>
              </div>
              <div class="my-3 text-right">
                <button class="text-sm font-semibold bg-red-600 rounded py-3 px-4 text-white">Cancel This Property</button>
              </div>
            </template>
          </CardDetails>
        </div>

      </div>
    </div>
    <!-- right side bar -->
    <div class="w-right border-l border-gray-400 min-h-screen bg-white">
      <div class="flex items-center justify-between text-gray-800 px-4 py-2">
        <a href="#" class="font-medium">Notes</a>
        <button class="flex items-center rounded-lg px-2 py-1 border text-xs">
          <span>
            <svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
          </span>
          <span class="ml-1 uppercase font-medium">New note</span>
        </button>
      </div>
      <div class="mt-3 text-sm font-medium border-b border-gray-400">
        <div class="flex items-center justify-between px-4">
          <a  v-for="(link, i) in sideLink" :key="i"
              href="#" 
              class="text-gray-700 pb-3 block w-full text-center"
              :class="`${ link === setSideLink  ? 'border-b-2 border-blue-resolute' : 'border-b-2 border-transparent'}`"
              @click="setSideLink = link">
              {{ link }}
          </a>
        </div>
      </div>
      <div class="space-y-3">
        <div class="mt-3 flex px-4 py-2 text-gray-800 cursor-pointer group group-hover:bg-blue-500">
          <div class="text-blue-resolute-icon">
            <svg class="w-6 h-6 group:hover:text-white" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="ml-2">
            <div class="text-sm leading-normal font-medium">
              The client called and said their fence fell over.
            </div>
            <div class="mt-2 text-xs text-gray-600">Aaron &middot; April 15, 2021 9:36am</div>
          </div>
        </div>
        <div class="mt-3 flex px-4 text-gray-800 cursor-pointer">
          <div class="text-blue-resolute-icon">
            <svg class="w-6 h-6" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="ml-2">
            <div class="text-sm leading-normal font-medium">
              AOA 22228 was made the current AOA for PID GALDZO2R415ZK
            </div>
            <div class="mt-2 text-xs text-gray-600">Aaron &middot; April 7, 2021 11:42am</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Resolute UI'
      }
    },
    components: {
      SideBar: () => import('@/components/SideBar'),
      CardDetails: () => import('@/components/CardDetails')
    },
    data () {
      return {
        links: [
          {
            title: 'Dashboard',
            icon: '<svg class="w-5 h-5" stroke="1" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="13029"><path xmlns="http://www.w3.org/2000/svg" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm6-6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>',
            to: '/dashboard'
          },
          {
            title: 'Friendly Form',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path xmlns="http://www.w3.org/2000/svg" d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>',
            to: '/friendly-form'
          },
          {
            title: 'Friendly Submission',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>',
            to: '/friendly-submission'
          },
          {
            title: 'Properties',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',
            to: '/properties'
          },
          {
            title: 'Contacts',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>',
            to: '/contacts'
          },
          {
            title: 'AOAs',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>',
            to: '/aoas'
          },
          {
            title: 'Imports',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',
            to: '/imports'
          },
          {
            title: 'Exports',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>',
            to: '/exports'
          },
          {
            title: 'Property Flags',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path></svg>',
            to: '/property-flags'
          },
          {
            title: 'CAD Websites',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
            to: '/cad-websites'
          },
          {
            title: 'Scrapers',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"></path><path xmlns="http://www.w3.org/2000/svg" d="M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"></path></svg>',
            to: '/scrapers'
          },
          {
            title: 'Updates',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd"></path></svg>',
            to: '/updates'
          },
          {
            title: 'Resolute PTS Website',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path></svg>',
            to: '/resolute-pts-website'
          },
          {
            title: 'logout',
            icon: '<svg class="w-5 h-5" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
          }
        ],
        setLink: 'Properties',
        sideLink: ['Notes Only', 'Audits', 'Everything'],
        setSideLink: 'Notes Only'
      }
    }
  }
</script>