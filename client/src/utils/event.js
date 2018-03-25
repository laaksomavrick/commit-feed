// utils/event.js

export const event_title = (event) => {
  const verb = get_verb(event)
  const noun = get_noun(event)
  const object = get_object(event)

  return `I ${verb} ${noun} to ${object}`
}

const get_verb = (event) => {
  return 'pushed'
}

const get_noun = (event) => {
  const count = event.commits.length
  const pluralized = count === 1 ? 'commit' : 'commits'
  return `${count} ${pluralized}`
}

const get_object = (event) => {
  const viewable = !!event.public
  return viewable ? (
    event.repo
  ) : (
    'a private repository'
  )
}
