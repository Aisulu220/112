import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 75,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userAvatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#9AABC7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 11,
    color: '#8497DA',
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#202A44',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  roundButton: {
    width: 37,
    height: 37,
    borderRadius: 20,
    backgroundColor: '#E4E9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    paddingHorizontal: 17,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  shortcut: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
  },
  shortcutText: {
    color: '#7994E8',
    fontSize: 10,
    marginTop: 3,
  },
  searchBox: {
    flex: 1,
    height: 42,
    backgroundColor: '#D0D9FF',
    borderRadius: 25,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 7,
    fontSize: 12,
    color: '#34446D',
  },
  scrollContent: {
    paddingBottom: 15,
  },
  dateSection: {
    backgroundColor: '#D5DEFF',
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 17,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#34446D',
    marginBottom: 14,
  },
  appointmentSection: {
    backgroundColor: '#D5DEFF',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  appointmentHeader: {
    height: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 10,
    color: '#7892E5',
  },
  todayLabel: {
    fontSize: 10,
    color: '#365FF5',
    fontWeight: '600',
  },
  timeLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    minHeight: 58,
  },
  time: {
    width: 35,
    fontSize: 10,
    color: '#7992E8',
    paddingTop: 7,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
    gap: 12,
  },
  dottedLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#8AA2F5',
  },
  doctorsSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 17,
    paddingTop: 17,
    paddingBottom: 10,
  },
  doctorSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 12,
    color: '#365FF5',
    marginBottom: 14,
  },
  emptyText: {
    textAlign: 'center',
    padding: 25,
    color: '#7583A8',
  },
});