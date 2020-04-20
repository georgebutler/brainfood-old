<template>
  <div class="media">
    <figure class="media-left">
      <p class="image is-32x32">
        <img class="is-rounded" src="https://i.pravatar.cc/32" alt="Avatar">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div>
          <strong>{{ name }}</strong> <small>{{ time | moment("from") }}</small>
          <p>John added a new item.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedItem',
  props: {
    activity: {
      type: Object,
      required: true
    },
    time: {
      type: Date,
      default: () => {
        return new Date()
      }
    }
  }
}
</script>
