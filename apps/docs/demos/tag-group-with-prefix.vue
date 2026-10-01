<template>
  <div class="demo-tag-group-prefix">
    <TagGroup label="With Icons" selection-mode="single">
      <Tag value="news">
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          <path clip-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm6 6H5.43a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.07a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-5.32-3h3.57a.75.75 0 0 1 0 1.5H5.18a.75.75 0 0 1 0-1.5" fill="currentColor" fill-rule="evenodd" />
        </svg>
        News
      </Tag>
      <Tag value="travel">
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          <path clip-rule="evenodd" d="M8 13.5c1.63 0 3.094-.709 4.101-1.835A2.5 2.5 0 0 1 10.25 9.25V9a.75.75 0 0 0-.75-.75 2.25 2.25 0 0 1 0-4.5.75.75 0 0 0 .75-.75v-.02a5.5 5.5 0 0 0-7.471 3.287A2.25 2.25 0 0 1 4.75 8.5c0 .414.336.75.75.75a2.25 2.25 0 0 1 1.265 4.11q.597.139 1.235.14m-3.491-1.25H5.5a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 3.25 8.5a.75.75 0 0 0-.744-.75 5.49 5.49 0 0 0 2.003 4.5m8.241-2h.27A5.5 5.5 0 0 0 13.5 8c0-1.665-.74-3.158-1.91-4.166A2.25 2.25 0 0 1 9.5 5.25a.75.75 0 1 0 0 1.5A2.25 2.25 0 0 1 11.75 9v.25a1 1 0 0 0 1 1M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill="currentColor" fill-rule="evenodd" />
        </svg>
        Travel
      </Tag>
      <Tag value="gaming">
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          <g clip-path="url(#tag-prefix-rocket)">
            <path clip-rule="evenodd" d="m6.993 5.628-.787-.157-1.118-.224a1.13 1.13 0 0 0-1.024.31L2.837 6.785a1.15 1.15 0 0 0-.285.474l1.02.185a6.19 6.19 0 0 1 4.985 4.985l.185 1.02c.178-.055.34-.152.474-.285l1.227-1.227c.268-.268.384-.652.31-1.024l-.224-1.118-.157-.787.567-.568 1.243-1.242A4.5 4.5 0 0 0 13.5 4.015V2.5h-1.515a4.5 4.5 0 0 0-3.182 1.318L7.561 5.061zM12 9.5l1.243-1.243A6 6 0 0 0 15 4.015V2.5A1.5 1.5 0 0 0 13.5 1h-1.515a6 6 0 0 0-4.242 1.757L6.5 4l-1.118-.224a2.63 2.63 0 0 0-2.379.72L1.777 5.724A2.65 2.65 0 0 0 1 7.598c0 .522.373.97.887 1.063l1.417.258a4.69 4.69 0 0 1 3.777 3.777l.258 1.417c.093.514.54.887 1.063.887.703 0 1.377-.28 1.875-.777l1.226-1.226a2.63 2.63 0 0 0 .72-2.38zm-8.06 2.571c-.311-.31-.76-.28-1.005-.036-.233.233-.423.658-.527 1.247a5 5 0 0 0-.05.366q.184-.019.377-.053c.596-.106 1.017-.296 1.24-.52.245-.244.275-.693-.036-1.004M5 11.011c-.873-.874-2.273-.89-3.126-.036C.777 12.07.802 14.094.837 14.712c.007.12.06.23.145.315a.5.5 0 0 0 .32.145c.622.032 2.652.046 3.734-1.035.853-.854.837-2.253-.036-3.126m6.78-5.73a.75.75 0 0 0-1.06-1.061l-1.5 1.5a.75.75 0 0 0 1.06 1.06z" fill="currentColor" fill-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="tag-prefix-rocket">
              <path d="M0 0h16v16H0z" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
        Gaming
      </Tag>
      <Tag value="shopping">
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          <path clip-rule="evenodd" d="M5.174 3h5.652a1.5 1.5 0 0 1 1.49 1.328l.808 7A1.5 1.5 0 0 1 11.634 13H4.366a1.5 1.5 0 0 1-1.49-1.672l.808-7A1.5 1.5 0 0 1 5.174 3m-2.98 1.156A3 3 0 0 1 5.174 1.5h5.652a3 3 0 0 1 2.98 2.656l.808 7a3 3 0 0 1-2.98 3.344H4.366a3 3 0 0 1-2.98-3.344zM5 5.25a.75.75 0 0 1 1.5 0v.25a1.5 1.5 0 1 0 3 0v-.25a.75.75 0 0 1 1.5 0v.25a3 3 0 0 1-6 0z" fill="currentColor" fill-rule="evenodd" />
        </svg>
        Shopping
      </Tag>
      <Description>Tags with icons</Description>
    </TagGroup>

    <TagGroup label="With Avatars" selection-mode="single">
      <Tag value="fred">
        <Avatar class="demo-tag-group-avatar" size="sm">
          <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" alt="Fred" />
          <AvatarFallback>F</AvatarFallback>
        </Avatar>
        Fred
      </Tag>
      <Tag value="michael">
        <Avatar class="demo-tag-group-avatar" size="sm">
          <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" alt="Michael" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        Michael
      </Tag>
      <Tag value="jane">
        <Avatar class="demo-tag-group-avatar" size="sm">
          <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" alt="Jane" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        Jane
      </Tag>
      <Description>Tags with avatars</Description>
    </TagGroup>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Description, Tag, TagGroup } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-tag-group-prefix {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}

.demo-tag-group-avatar {
  width: 1rem;
  height: 1rem;

  [data-slot="avatar-fallback"] {
    font-size: 0.625rem;
  }
}
</style>
